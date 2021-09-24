// import React from "react";
// import PropTypes from "prop-types";
// import clsx from "clsx";
// import * as Yup from "yup";
// import { Formik, Field, getIn } from "formik";
// import { useSnackbar } from "notistack";
// // import moment from 'moment';
// import {
//   Box,
//   Button,
//   TextField,
//   makeStyles,
//   MenuItem,
//   FormControl,
//   Select,
//   InputLabel,
// } from "@material-ui/core";
// // import { KeyboardDatePicker, DatePicker } from "@material-ui/pickers";
// import PlacesAutocomplete from "react-places-autocomplete";
// import LocationOnIcon from "@material-ui/icons/LocationOn";

// const movingTypeOptions = [
//   { key: "6", text: "Moving", value: "Moving" },
//   { key: "1", text: "Moving with Storage", value: "Moving with Storage" },
//   { key: "2", text: "Loading Help", value: "Loading Help" },
//   { key: "3", text: "Unloading Help", value: "Unloading Help" },
//   { key: "4", text: "Packing Only", value: "Packing Only" },
//   { key: "5", text: "Inside Move", value: "Inside Move" },
// ];
// const movingSizeOptions = [
//   {
//     key: "room",
//     text: "One Room or less (<1000 lbs)",
//     value: "Room or less (partial move)",
//   },
//   { key: "studio", text: "Studio Apt.", value: "Studio apartment" },
//   { key: "onebed", text: "1 Bedroom Apt.", value: "1 Bedroom apartment" },
//   { key: "twobed", text: "2 Bedroom Apt.", value: "2 Bedroom apartment" },
//   { key: "threebed", text: "3+ Bedroom Apt.", value: "3+ Bedroom apartment" },
//   {
//     key: "twohouse",
//     text: "2 Bedroom House/Townhouse",
//     value: "2 Bedroom House/Townhouse",
//   },
//   {
//     key: "threehouse",
//     text: "3 Bedroom House/Townhouse",
//     value: "3 Bedroom House/Townhouse",
//   },
//   {
//     key: "fourhouse",
//     text: "4+ Bedroom House/Townhouse",
//     value: "4+ Bedroom House/Townhouse",
//   },
//   {
//     key: "commercial",
//     text: "Office / Commercial Moving",
//     value: "Office / Commercial space",
//   },
// ];
// const houseTypeOptions = [
//   { key: "elv", text: "Elevator Bldg.", value: "elevator building" },
//   {
//     key: "grfloor",
//     text: "No Stairs - Ground Floor",
//     value: "1st/Ground floor",
//   },
//   { key: "2floor", text: "Stairs - 2nd Floor", value: "2nd floor" },
//   { key: "3floor", text: "Stairs - 3rd Floor", value: "3rd floor" },
//   { key: "4floor", text: "Stairs - 4th Floor", value: "4th floor" },
//   {
//     key: "5floor",
//     text: "Stairs 5th or Higher - N/A",
//     value: "Stairs 5th or Higher - N/A",
//     disabled: true,
//   },
//   { key: "private", text: "Private House", value: "private house" },
//   { key: "storage", text: "Storage Unit", value: "storage unit" },
// ];

// const useStyles = makeStyles((theme) => ({
//   root: {},
//   addTab: {
//     marginLeft: theme.spacing(2),
//   },
//   datePicker: {
//     "& + &": {
//       marginLeft: theme.spacing(2),
//     },
//   },
//   editor: {
//     "& .ql-editor": {
//       height: 200,
//     },
//   },
//   flexConatiner: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
//     [theme.breakpoints.down("xs")]: {
//       flexDirection: "column",
//     },
//   },
//   flexItem: {
//     flex: "0 0 47%",
//   },
//   flexItemFirst: {
//     flex: "0 0 65%",
//     [theme.breakpoints.down("xs")]: {
//       flex: "0 0 100%",
//     },
//   },
//   flexItemSecond: {
//     flex: "0 0 33%",
//   },
//   itemsContainerApt: {
//     flex: "0 0 30%",
//     [theme.breakpoints.down("xs")]: {
//       flex: "0 0 27%",
//     },
//   },
//   itemsContainerType: {
//     flex: "0 0 65%",
//     [theme.breakpoints.down("xs")]: {
//       flex: "0 0 70%",
//     },
//   },
//   addressContainer: {
//     display: "flex",
//     justifyContent: "space-between",
//   },
//   typeContainer: {
//     flex: "0 0 48%",
//     justifyContent: "space-evenly",
//     display: "flex",
//     flexDirection: "column",
//   },
//   itemsContainer: {
//     justifyContent: "space-between",
//     display: "flex",
//   },
//   disabled: {
//     backgroundColor: "#efefef",
//   },
//   destination: {
//     marginTop: "32px",
//     // [theme.breakpoints.down("xs")]: {
//     //   marginTop: "32px",
//     // },
//   },
//   dateMtop: {
//     [theme.breakpoints.down("xs")]: {
//       marginTop: "32px",
//     },
//   },
//   icon: {
//     position: "relative",
//     width: 16,
//     height: 16,
//   },
//   clearBrush: {
//     width: 16,
//     height: 16,
//   },
// }));

// function EditJob({ className, setJob, job, setEditOpen, ...rest }) {
//   const classes = useStyles();
//   const { enqueueSnackbar } = useSnackbar();

//   const movingSizeOptionsSelect = () => {
//     let moveSize = movingSizeOptions.map((item, index) => {
//       return (
//         <MenuItem key={item.key} value={item.value}>
//           {item.text}
//         </MenuItem>
//       );
//     });
//     return moveSize;
//   };

//   const movingTypeOptionsSelect = () => {
//     let moveType = movingTypeOptions.map((item, index) => {
//       return (
//         <MenuItem key={item.key} value={item.value}>
//           {item.text}
//         </MenuItem>
//       );
//     });
//     return moveType;
//   };

//   const houseTypeOptionsSelect = () => {
//     let houseType = houseTypeOptions.map((item, index) => {
//       if (item.value === "Stairs 5th or Higher - N/A") {
//         return (
//           <MenuItem key={item.key} value={item.value} disabled>
//             {item.text}
//           </MenuItem>
//         );
//       } else {
//         return (
//           <MenuItem key={item.key} value={item.value}>
//             {item.text}
//           </MenuItem>
//         );
//       }
//     });
//     return houseType;
//   };

//   const handleAddressChange = ({ name, form, search }) => {
//     form.setFieldValue(name, search);
//   };

//   const renderPlacesAutocomplete = ({ field, form }) => {
//     const name = field.name;
//     let noOrigin = false;
//     let bgColor = "#fff";

//     if (
//       form.values.job.job_type === "Loading Help" ||
//       form.values.job.job_type === "Packing Only" ||
//       form.values.job.job_type === "Inside Move" ||
//       form.values.job.job_type === "Moving" ||
//       form.values.job.job_type === "Moving with Storage"
//     ) {
//       noOrigin = false;
//     } else {
//       noOrigin = true;
//       bgColor = "#efefef";
//     }

//     return (
//       <PlacesAutocomplete
//         value={field.value}
//         onChange={(search) => {
//           handleAddressChange({ name: field.name, form, search });
//         }}
//       >
//         {({ getInputProps, getSuggestionItemProps, suggestions }) => {
//           const additionalProps = {
//             name: field.name,
//             className: "form-input__field",
//           };
//           const text = () => {
//             return <span>powered by </span>;
//           };
//           const icon = () => {
//             return (
//               <img
//                 src="https://cdn.worldvectorlogo.com/logos/google-2015.svg"
//                 alt="googleimg"
//                 style={{ width: "15%", marginLeft: "5px" }}
//               />
//             );
//           };

//           const autocompleteInputProps = getInputProps(additionalProps);
//           return (
//             <div className="autocomplete-root">
//               <TextField
//                 {...autocompleteInputProps}
//                 label="Origin Address *"
//                 variant="outlined"
//                 placeholder="Type Full Address"
//                 style={{ width: "100%", backgroundColor: bgColor }}
//                 error={
//                   getIn(form.errors, name) && getIn(form.touched, name)
//                     ? true
//                     : false
//                 }
//                 disabled={noOrigin}
//               />
//               <div className="autocomplete-dropdown-container">
//                 {suggestions.map((suggestion, i) => {
//                   const style = {
//                     backgroundColor: suggestion.active ? "#e0e0e0" : "#fff",
//                     cursor: "pointer",
//                     padding: "10px 0px",
//                     fontSize: "12px",
//                     borderBottom: "1px solid #b7b7b7",
//                     alignItems: "center",
//                     display: "flex",
//                   };
//                   return (
//                     <div
//                       {...getSuggestionItemProps(suggestion, { style })}
//                       key={i}
//                     >
//                       <LocationOnIcon className={classes.icon} key={i} />
//                       <span>
//                         {suggestion.formattedSuggestion.mainText}
//                       </span>, {suggestion.formattedSuggestion.secondaryText}
//                     </div>
//                   );
//                 })}
//               </div>
//               {suggestions.length !== 0 ? (
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     float: "right",
//                     justifyContent: "flex-end",
//                     marginTop: "5px",
//                     fontSize: "10px",
//                   }}
//                 >
//                   {text()} {icon()}
//                 </div>
//               ) : null}
//             </div>
//           );
//         }}
//       </PlacesAutocomplete>
//     );
//   };

//   const renderDestinationAutocomplete = ({ field, form }) => {
//     const name = field.name;
//     let noDestination = false;
//     let bgColor = "#fff";

//     if (
//       form.values.job.job_type === "Unloading Help" ||
//       form.values.job.job_type === "Moving" ||
//       form.values.job.job_type === "Moving with Storage"
//     ) {
//       noDestination = false;
//     } else {
//       noDestination = true;
//       bgColor = "#efefef";
//     }

//     return (
//       <PlacesAutocomplete
//         value={field.value}
//         onChange={(search) => {
//           handleAddressChange({ name: field.name, form, search });
//         }}
//       >
//         {({ getInputProps, getSuggestionItemProps, suggestions }) => {
//           const additionalProps = {
//             name: field.name,
//             className: "form-input__field",
//           };

//           const text = () => {
//             return <span>powered by </span>;
//           };
//           const icon = () => {
//             return (
//               <img
//                 src="https://cdn.worldvectorlogo.com/logos/google-2015.svg"
//                 alt="gglimg"
//                 style={{ width: "17%", marginLeft: "5px" }}
//               />
//             );
//           };

//           const autocompleteInputProps = getInputProps(additionalProps);
//           return (
//             <div className="autocomplete-root">
//               <TextField
//                 {...autocompleteInputProps}
//                 label="Destination Address *"
//                 variant="outlined"
//                 placeholder="Type Full Address"
//                 style={{ width: "100%", backgroundColor: bgColor }}
//                 error={
//                   getIn(form.errors, name) && getIn(form.touched, name)
//                     ? true
//                     : false
//                 }
//                 disabled={noDestination}
//               />
//               <div className="autocomplete-dropdown-container">
//                 {suggestions.map((suggestion, i) => {
//                   const style = {
//                     backgroundColor: suggestion.active ? "#e0e0e0" : "#fff",
//                     cursor: "pointer",
//                     padding: "10px 0px",
//                     fontSize: "12px",
//                     borderBottom: "1px solid #b7b7b7",
//                     alignItems: "center",
//                     display: "flex",
//                   };
//                   return (
//                     <div
//                       {...getSuggestionItemProps(suggestion, { style })}
//                       key={i}
//                     >
//                       <LocationOnIcon className={classes.icon} key={i} />
//                       <span>
//                         {suggestion.formattedSuggestion.mainText}
//                       </span>, {suggestion.formattedSuggestion.secondaryText}
//                     </div>
//                   );
//                 })}
//               </div>
//               {suggestions.length !== 0 ? (
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     float: "right",
//                     justifyContent: "flex-end",
//                     marginTop: "5px",
//                     fontSize: "10px",
//                   }}
//                 >
//                   {text()} {icon()}
//                 </div>
//               ) : null}
//             </div>
//           );
//         }}
//       </PlacesAutocomplete>
//     );
//   };

//   // const SelectDate = ({ field, form, ...other}) => {
//   //   let touch = form.touched;
//   //   let error = form.errors;
//   //   let name = field.name
//   //   let label = '';
//   //   if (name === "job.pick_up_date") {
//   //     label = 'Move Date'
//   //   } else {
//   //     label = 'Delivery Date'
//   //   }
//   //
//   //   return (
//   //     <DatePicker
//   //       autoOk
//   //       disableToolbar
//   //       required
//   //       variant="inline"
//   //       inputVariant="outlined"
//   //       label={label}
//   //       format="MMM DD YYYY"
//   //       error={getIn(error, name) && getIn(touch, name)}
//   //       onChange={date => form.setFieldValue(field.name, moment(date).format('MM/DD/YYYY'), true)}
//   //       {...other}
//   //       maxDate={new Date().setMonth(new Date().getMonth()+3)}
//   //       disablePast
//   //       style={{width: '100%'}}
//   //     />
//   //
//   //   );
//   // };

//   // function validateDate(value) {
//   //   let error;
//   //   if (value === 'Invalid date' || value === null) {
//   //     error = 'Required';
//   //   }
//   //   return error;
//   // }
//   function validateAddress(value) {
//     let error;
//     if (value === "") {
//       error = "Required";
//     }
//     return error;
//   }

//   return (
//     <Formik
//       initialValues={{
//         ...job,
//       }}
//       validationSchema={Yup.object().shape({
//         job: Yup.object().shape({
//           job_size: Yup.string().required("Required"),
//           job_type: Yup.string().required("Required"),
//         }),
//         origin: Yup.object().shape({
//           floor: Yup.string().required("Required"),
//           address: Yup.string().required("Required"),
//         }),
//         destination: Yup.object().shape({
//           floor: Yup.string().required("Required"),
//           address: Yup.string().required("Required"),
//         }),
//       })}
//       validateOnChange={true}
//       onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
//         try {
//           await fetch(`/api/v1/jobs/${job.job.id}`, {
//             method: "PUT",
//             body: JSON.stringify(values.job),
//             headers: {
//               "Content-Type": "application/json",
//             },
//           });
//           await fetch(`/api/v1/origins/${job.origin.id}`, {
//             method: "PUT",
//             body: JSON.stringify(values.origin),
//             headers: {
//               "Content-Type": "application/json",
//             },
//           });
//           await fetch(`/api/v1/destinations/${job.destination.id}`, {
//             method: "PUT",
//             body: JSON.stringify(values.destination),
//             headers: {
//               "Content-Type": "application/json",
//             },
//           });
//           setEditOpen(false);
//           setJob(values);
//           enqueueSnackbar("Job Updated", {
//             variant: "success",
//           });
//         } catch (err) {
//           setErrors({ submit: err.message });
//           setStatus({ success: false });
//           setSubmitting(false);
//         }
//       }}
//     >
//       {({
//         errors,
//         handleBlur,
//         handleChange,
//         handleSubmit,
//         isSubmitting,
//         setFieldValue,
//         setFieldTouched,
//         setFieldError,
//         touched,
//         resetForm,
//         values,
//       }) => {
//         let noOrigin = false;
//         let noDestination = false;
//         let backgroundColorDestination = "#fff";
//         let backgroundColorOrigin = "#fff";

//         if (
//           values.job.job_type === "Loading Help" ||
//           values.job.job_type === "Packing Only" ||
//           values.job.job_type === "Inside Move"
//         ) {
//           noDestination = true;
//           backgroundColorDestination = "#efefef";
//           values.destination = Object.assign(values.destination, values.origin);
//           delete errors.destination;
//         }
//         if (values.job.job_type === "Unloading Help") {
//           noOrigin = true;
//           backgroundColorOrigin = "#efefef";
//           values.origin = Object.assign(values.origin, values.destination);
//           delete errors.origin;
//         }

//         return (
//           <form
//             onSubmit={handleSubmit}
//             className={clsx(classes.root, className)}
//             {...rest}
//           >
//             <Box mt={4} className={classes.flexConatiner}>
//               <Box className={classes.flexItemFirst}>
//                 <FormControl
//                   variant="outlined"
//                   style={{ width: "100%" }}
//                   error={
//                     getIn(errors, "job.job_size") &&
//                     getIn(touched, "job.job_size")
//                   }
//                 >
//                   <InputLabel>Size of Move</InputLabel>
//                   <Select
//                     id="job_size"
//                     label="Size of Move"
//                     variant="outlined"
//                     name="job.job_size"
//                     value={values.job.job_size}
//                     onChange={handleChange}
//                   >
//                     {movingSizeOptionsSelect()}
//                   </Select>
//                 </FormControl>
//               </Box>
//               <Box className={clsx(classes.flexItemSecond, classes.dateMtop)}>
//                 {/*<Field name='job.pick_up_date' component={SelectDate} value={values.job.pick_up_date} validate={validateDate}/>*/}
//               </Box>
//             </Box>
//             <Box mt={4} className={classes.flexConatiner}>
//               <Box className={classes.flexItemSecond}>
//                 <FormControl
//                   variant="outlined"
//                   style={{ width: "100%" }}
//                   error={
//                     getIn(errors, "job.job_type") &&
//                     getIn(touched, "job.job_type")
//                   }
//                 >
//                   <InputLabel>Type of Service</InputLabel>
//                   <Select
//                     id="job_type"
//                     label="Type of Service"
//                     variant="outlined"
//                     name="job.job_type"
//                     value={values.job.job_type}
//                     onChange={handleChange}
//                   >
//                     {movingTypeOptionsSelect()}
//                   </Select>
//                 </FormControl>
//               </Box>
//               <Box mt={4} className={classes.flexConatiner}>
//                 <Box>
//                   <TextField
//                     id="job.job_rate"
//                     label="Rate"
//                     type="number"
//                     value={values.job.job_rate}
//                     variant="outlined"
//                     name="job.job_rate"
//                     onChange={handleChange}
//                   />
//                 </Box>
//                 {/*

//                 (values.job.job_type === "Moving" || values.job.job_type === "Loading Help" || values.job.job_type === "Unloading Help" || values.job.job_type === "Packing Only" || values.job.job_type === "Inside Move") ?
//                 (
//                     <div></div>
//                 ) : (
//                   <Field name='job.delivery_date' component={SelectDate} value={values.job.delivery_date} validate={validateDate} className={classes.dateMtop}/>
//                 )
//               */}
//               </Box>
//               <Box mt={4} className={classes.flexConatiner}>
//                 <Box>
//                   <TextField
//                     id="job.estimated_time"
//                     label="Estimated Time"
//                     value={values.job.estimated_time}
//                     variant="outlined"
//                     name="job.estimated_time"
//                     onChange={handleChange}
//                   />
//                 </Box>
//               </Box>
//               <Box mt={4} className={classes.flexConatiner}>
//                 <Box>
//                   <TextField
//                     id="job.estimated_quote"
//                     label="Estimated Quote"
//                     value={values.job.estimated_quote}
//                     variant="outlined"
//                     name="job.estimated_quote"
//                     onChange={handleChange}
//                   />
//                 </Box>
//               </Box>
//             </Box>

//             <Box mt={4} className={classes.flexConatiner}>
//               <Box className={classes.typeContainer}>
//                 <Box>
//                   <Field
//                     name="origin.address"
//                     value={values.origin.address}
//                     handleBlur={handleBlur}
//                     component={renderPlacesAutocomplete}
//                     disabled={noOrigin}
//                     validate={validateAddress}
//                   />
//                 </Box>
//                 <Box className={classes.itemsContainer} mt={4}>
//                   <Box className={classes.itemsContainerApt}>
//                     <TextField
//                       id="origin.apt_number"
//                       label="Apt #"
//                       value={values.origin.apt_number}
//                       variant="outlined"
//                       name="origin.apt_number"
//                       onChange={handleChange}
//                       disabled={noOrigin}
//                       style={{
//                         width: "100%",
//                         backgroundColor: backgroundColorOrigin,
//                       }}
//                     />
//                   </Box>
//                   <Box
//                     className={classes.itemsContainerType}
//                     style={{ width: "100%" }}
//                   >
//                     <FormControl
//                       variant="outlined"
//                       style={{ width: "100%" }}
//                       error={
//                         getIn(errors, "origin.floor") &&
//                         getIn(touched, "origin.floor")
//                           ? true
//                           : false
//                       }
//                     >
//                       <InputLabel>Select elevator/stairs...</InputLabel>
//                       <Select
//                         id="origin.floor"
//                         label="Select elevator/stairs..."
//                         variant="outlined"
//                         name="origin.floor"
//                         value={values.origin.floor}
//                         onChange={handleChange}
//                         disabled={noOrigin}
//                         style={{ backgroundColor: backgroundColorOrigin }}
//                       >
//                         {houseTypeOptionsSelect()}
//                       </Select>
//                     </FormControl>
//                   </Box>
//                 </Box>
//               </Box>

//               <Box className={clsx(classes.destination, classes.typeContainer)}>
//                 <Box>
//                   <Field
//                     name="destination.address"
//                     value={values.destination.address}
//                     handleBlur={handleBlur}
//                     component={renderDestinationAutocomplete}
//                     validate={validateAddress}
//                   />
//                 </Box>
//                 <Box className={classes.itemsContainer} mt={4}>
//                   <Box className={classes.itemsContainerApt}>
//                     <TextField
//                       id="destination.apt_number"
//                       label="Apt #"
//                       value={values.destination.apt_number}
//                       variant="outlined"
//                       name="destination.apt_number"
//                       onChange={handleChange}
//                       disabled={noDestination}
//                       style={{
//                         width: "100%",
//                         backgroundColor: backgroundColorDestination,
//                       }}
//                     />
//                   </Box>
//                   <Box
//                     style={{ width: "100%" }}
//                     className={classes.itemsContainerType}
//                   >
//                     <FormControl
//                       variant="outlined"
//                       style={{ width: "100%" }}
//                       error={
//                         getIn(errors, "destination.floor") &&
//                         getIn(touched, "destination.floor")
//                           ? true
//                           : false
//                       }
//                     >
//                       <InputLabel>Select elevator/stairs...</InputLabel>
//                       <Select
//                         id="destination.floor"
//                         label="Select elevator/stairs..."
//                         variant="outlined"
//                         name="destination.floor"
//                         value={values.destination.floor}
//                         onChange={handleChange}
//                         disabled={noDestination}
//                         style={{ backgroundColor: backgroundColorDestination }}
//                       >
//                         {houseTypeOptionsSelect()}
//                       </Select>
//                     </FormControl>
//                   </Box>
//                 </Box>
//               </Box>
//             </Box>
//             <Box mt={6} display="flex" alignItems="center">
//               <Button
//                 onClick={() => setEditOpen(false)}
//                 size="small"
//                 variant="outlined"
//               >
//                 Cancel
//               </Button>
//               <Box flexGrow={1} />
//               <Box>
//                 <Button
//                   color="secondary"
//                   type="submit"
//                   variant="contained"
//                   size="small"
//                   disableElevation
//                 >
//                   Update
//                 </Button>
//               </Box>
//             </Box>
//           </form>
//         );
//       }}
//     </Formik>
//   );
// }

// EditJob.propTypes = {
//   className: PropTypes.string,
//   onNext: PropTypes.func,
//   onBack: PropTypes.func,
// };

// export default EditJob;
