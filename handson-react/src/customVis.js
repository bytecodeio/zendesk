
import * as React from "react";
import * as ReactDOM from "react-dom";
import { CustomTable } from "./CustomTable";
import PaginationComponent from "./PaginationComponent";

looker.plugins.visualizations.add({
  create: function (element, config) {

  },

updateAsync: function (data, element, config, queryResponse, details, done) {

const { dimension_like: dimensionLike } = queryResponse.fields;

const dimensions = dimensionLike.map((dimension) => ({
   label: dimension.label_short ?? dimension.label,
   name: dimension.name


 }));

 const { measure_like: measureLike } = queryResponse.fields;


 const measures = measureLike.map((measure) => ({
   label: measure.label_short ?? measure.label,
   name: measure.name,
 }));



 const fieldOptions = [...dimensions, ...measures].map((dim) => ({
     [dim.label]: queryResponse.data.map(row => row[dim.name].value).join(",")
   }));

console.log(data, "data api response")

    const options = {

      textTitle: {
        type: "string",
        label: "Choose Title from Dropdown",
        display: "select",
        placeholder: "Please Select",
        values: fieldOptions,
        order: 1,
        default:"Please Select",
        section: "Style",
      },

      color_title: {
        type: 'array',
        label: 'Title Background Color',
        display: 'colors',
        default: ['#00363d', '#17494d', '#498283', '#bdd9d7', '#aecfc2', '#d1e8df', '#edf8f4', '#f5fcfc'],
        order: 2,
        section: "Style",
      },

      titleColor: {
      type: "string",
      label: "Title Color",
      default: "#ffffff",
      display: "text",
      placeholder: "#ffffff",

      order: 3,
      section: "Style",
    },

      writeTitle: {
        type: "string",
        label: "Write Title Text Instead",
        default: "",
        order: 4,
        section: "Style",
      },

      tableBordered: {
       type: "boolean",
       label: "Hide Header (thead)",
       default: false,
       order: 5,
       section: "Style",
     },

           toolOn: {
             type: "boolean",
             label: "Turn on Tooltip for Title",
             default: false,
             order: 6,
               section: "Style",
           },

           writeTooltip: {
             type: "string",
             label: "Write Tooltip Text",
             default: "",
             order: 7,
            section: "Style",
           },

     fixedHeight: {
      type: "boolean",
      label: "Table Fixed Height",
      default: true,
      order: 1,
      section: "Table",
    },

    // hidePag: {
    //  type: "boolean",
    //  label: "Hide Pagination",
    //  default: true,
    //  order: 9,
    // section: "Style",
    // },
    unsetTable: {
     type: "boolean",
     label: "Make Table Column Width Unset",
     default: false,
     order: 2,
     section: "Table",
    },
    //
    // removeBars: {
    //  type: "boolean",
    //  label: "Center Small Table",
    //  default: false,
    //  order: 5,
    // },

    index: {
     type: "boolean",
     label: "Show Row Index",
     default: true,
     order: 3,
      section: "Table",
    },

    border: {
     type: "boolean",
     label: "Remove Border",
     default: false,
     order: 12,
      section: "Style",
    },




      bodyStyle: {
          type: "string",
          label: "Choose Font",
          display: "select",
          values: [{ "Roboto": "'Roboto'" } , { "Open Sans": "'Open Sans'" }, {"Montserrat" : "'Montserrat'"}],
          section: "Style",
          default: "'Roboto', sans-serif;",
          order: 20,
        },



          weight: {
            type: "string",
             label: "Font Weight Title",
             default: "300",
             display: "text",
             placeholder: "300",
             section: "Style",
             order: 21,
          },

          weight1: {
            type: "string",
             label: "Font Weight Header",
             default: "500",
             display: "text",
             placeholder: "500",
             section: "Style",
             order: 22,
          },

          weight2: {
            type: "string",
             label: "Font Weight Table",
             default: "300",
             display: "text",
             placeholder: "300",
             section: "Style",
             order: 31,
          },

      fontColor: {
          type: "string",
           label: "Change Table Font Color",
           default: "#212529",
           display: "text",
           placeholder: "#212529",
           section: "Style",
           order: 32,
        },


        odd: {
            type: "string",
             label: "th Odd Background Color",
             default: "#FCFBFA",
             display: "text",
             placeholder: "#FCFBFA",
             section: "Style",
             order: 33,
          },






        hideTitle: {
          type: "boolean",
          label: "Hide Title Box",
          default: false,
          order: 34,
          section: "Style",
        },

        // tableFontSize: {
        //    type: "string",
        //    label: "Table Font Size",
        //    default: "12px",
        //    display: "text",
        //    placeholder: "12px",
        //    section: "Style",
        //    order: 31,
        //  },

        columnsToHide: {
            type: "string",
           label: "Columns to Hide (use comma as delimiter)",
           default: "",
           display: "text",
           section: "Table",
           order: 5,
        },


        short: {

        type: "string",
         label: "Choose Cell Size",
          default: "200px",
          display: "text",
          placeholder: "200px",
          order: 6,
          section: "Table",
        },



        freeze: {
         type: "boolean",
         label: "Freeze First 2 Columns",
         default: false,
         order: 7,
          section: "Table",
        },

        // freeze150: {
        //  type: "boolean",
        //  label: "Make Two Frozen 150px",
        //  default: false,
        //  order: 8,
        //   section: "Table",
        // },

        freeze3: {
         type: "boolean",
         label: "Freeze First 3 Columns",
         default: false,
         order: 9,
          section: "Table",
        },


        // freeze3150: {
        //  type: "boolean",
        //  label: "Make Three Frozen 150px",
        //  default: false,
        //  order: 10,
        //   section: "Table",
        // },

        wrapText: {
         type: "boolean",
         label: "Wrap Text",
         default: false,
         order: 11,
            section: "Table",
        },

        noScroll: {
         type: "boolean",
         label: "Turn off Scrolling",
         default: false,
         order: 12,
            section: "Table",
        },

        autoCell: {
         type: "boolean",
         label: "Make Cells Auto",
         default: false,
         order: 13,
         section: "Table",
        },





  };




 this.trigger("registerOptions", options);

    ReactDOM.render(

      <CustomTable
        data={data}
        config={config}
        queryResponse={queryResponse}
        details={details}
        done={done}
      />

      ,

      element
    );

  done()
  },
});
