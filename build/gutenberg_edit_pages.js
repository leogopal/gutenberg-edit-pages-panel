/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/CreatePageButton.js":
/*!********************************************!*\
  !*** ./src/components/CreatePageButton.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreatePageButton)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CreatePageForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CreatePageForm */ "./src/components/CreatePageForm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





/**
 * CreatePageButton component renders a button that opens a modal
 * to create a new page when clicked.
 *
 * @component
 * @example
 * return (
 *   <CreatePageButton />
 * )
 */

function CreatePageButton() {
  // State to manage the visibility of the modal
  const [isOpen, setOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  // Function to open the modal
  const openModal = () => setOpen(true);

  // Function to close the modal
  const closeModal = () => setOpen(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      onClick: openModal,
      variant: "primary",
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Create a new Page', 'hostinger-easy-onboarding')
    }), isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Modal, {
      onRequestClose: closeModal,
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Create a new page', 'hostinger-easy-onboarding'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_CreatePageForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onCancel: closeModal,
        onSaveFinished: closeModal
      })
    })]
  });
}

/***/ }),

/***/ "./src/components/CreatePageForm.js":
/*!******************************************!*\
  !*** ./src/components/CreatePageForm.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreatePageForm)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PageForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageForm */ "./src/components/PageForm.js");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







/**
 * CreatePageForm component renders a form to create a new page.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {Function} props.onCancel - Function to call when the cancel button is clicked.
 * @param {Function} props.onSaveFinished - Function to call when the save operation is finished.
 * @example
 * return (
 *   <CreatePageForm onCancel={handleCancel} onSaveFinished={handleSaveFinished} />
 * )
 */

function CreatePageForm({
  onCancel,
  onSaveFinished
}) {
  // State to manage the title of the new page
  const [title, setTitle] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();

  // Destructure functions from the notices store
  const {
    createSuccessNotice,
    createErrorNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_4__.store);

  // Destructure saveEntityRecord function from the core data store
  const {
    saveEntityRecord
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store);

  /**
   * Function to handle the save operation.
   * It saves the new page and shows a success or error notice.
   */
  const handleSave = async () => {
    const savedRecord = await saveEntityRecord('postType', 'page', {
      title,
      status: 'publish'
    });
    if (savedRecord) {
      onSaveFinished();
      // Tell the user the operation succeeded:
      await createSuccessNotice(sprintf(/* translators: %s: page title */
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('The page %s was created!', 'hostinger-easy-onboarding'), savedRecord.title.rendered), {
        type: 'snackbar',
        actions: [{
          url: savedRecord.link,
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('View post', 'hostinger-easy-onboarding')
        }],
        politeness: 'assertive',
        explicitDismiss: true
      });
    } else {
      // Tell the user the operation failed:
      await createErrorNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Failed to create the page', 'hostinger-easy-onboarding'), {
        type: 'snackbar'
      });
    }
  };

  // Select the last error and saving state from the core data store
  const {
    lastError,
    isSaving
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => ({
    lastError: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store).getLastEntitySaveError('postType', 'page'),
    isSaving: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store).isSavingEntityRecord('postType', 'page')
  }), []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_PageForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: title,
    onChangeTitle: setTitle,
    hasEdits: !!title,
    lastError: lastError,
    isSaving: isSaving,
    onSave: handleSave,
    onCancel: onCancel
  });
}

/***/ }),

/***/ "./src/components/DeletePageButton.js":
/*!********************************************!*\
  !*** ./src/components/DeletePageButton.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const DeletePageButton = ({
  pageId
}) => {
  const {
    createSuccessNotice,
    createErrorNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_0__.store);
  // useSelect returns a list of selectors if you pass the store handle
  // instead of a callback:
  const {
    getLastEntityDeleteError
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store);
  const handleDelete = async () => {
    // Confirm the deletion with confirm dialog
    const isConfirmed = window.confirm('Are you sure you want to delete this page?');
    if (!isConfirmed) {
      return;
    }
    const success = await deleteEntityRecord('postType', 'page', pageId);
    if (success) {
      // Tell the user the operation succeeded:
      createSuccessNotice('The page was deleted!', {
        type: 'snackbar'
      });
    } else {
      // We use the selector directly to get the fresh error *after* the deleteEntityRecord
      // have failed.
      const lastError = getLastEntityDeleteError('postType', 'page', pageId);
      const message = (lastError?.message || 'There was an error.') + ' Please refresh the page and try again.';
      // Tell the user how exactly the operation has failed:
      createErrorNotice(message, {
        type: 'snackbar'
      });
    }
  };
  const {
    deleteEntityRecord
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store);
  const {
    isDeleting,
    error
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => ({
    isDeleting: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store).isDeletingEntityRecord('postType', 'page', pageId),
    error: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store).getLastEntityDeleteError('postType', 'page', pageId)
  }), [pageId]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (error) {
      // Display the error
    }
  }, [error]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    variant: "secondary",
    onClick: handleDelete,
    disabled: isDeleting,
    size: "small",
    tooltip: "Delete page",
    showTooltip: true,
    label: "Delete page",
    icon: "trash",
    iconSize: 12,
    className: "delete-page-button",
    children: isDeleting ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Spinner, {})
    }) : ' '
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeletePageButton);

/***/ }),

/***/ "./src/components/Notifications.js":
/*!*****************************************!*\
  !*** ./src/components/Notifications.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Notifications)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




/**
 * Notifications component renders a list of snackbar notifications.
 *
 * @component
 * @example
 * return (
 *   <Notifications />
 * )
 */

function Notifications() {
  // Select all notices from the notices store
  const notices = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => select(_wordpress_notices__WEBPACK_IMPORTED_MODULE_1__.store).getNotices(), []);

  // Destructure the removeNotice function from the notices store
  const {
    removeNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_1__.store);

  // Filter notices to only include those of type 'snackbar'
  const snackbarNotices = notices.filter(({
    type
  }) => type === 'snackbar');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SnackbarList, {
    notices: snackbarNotices,
    className: "components-editor-notices__snackbar",
    onRemove: removeNotice
  });
}

/***/ }),

/***/ "./src/components/PageForm.js":
/*!************************************!*\
  !*** ./src/components/PageForm.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PageForm)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


/**
 * PageForm component renders a form for creating or editing a page.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {string} props.title - The title of the page.
 * @param {Function} props.onChangeTitle - Function to call when the title changes.
 * @param {boolean} props.hasEdits - Indicates if there are unsaved edits.
 * @param {Object} props.lastError - The last error encountered during save.
 * @param {boolean} props.isSaving - Indicates if the page is currently being saved.
 * @param {Function} props.onCancel - Function to call when the cancel button is clicked.
 * @param {Function} props.onSave - Function to call when the save button is clicked.
 * @example
 * return (
 *   <PageForm
 *     title={pageTitle}
 *     onChangeTitle={handleTitleChange}
 *     hasEdits={hasUnsavedEdits}
 *     lastError={saveError}
 *     isSaving={isPageSaving}
 *     onCancel={handleCancel}
 *     onSave={handleSave}
 *   />
 * )
 */

function PageForm({
  title,
  onChangeTitle,
  hasEdits,
  lastError,
  isSaving,
  onCancel,
  onSave
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "my-gutenberg-form",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
      label: "Page title:",
      value: title,
      onChange: onChangeTitle
    }), lastError ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "form-error",
      children: ["Error: ", lastError.message]
    }) : false, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "form-buttons",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
        onClick: onSave,
        variant: "primary",
        disabled: !hasEdits || isSaving,
        children: isSaving ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Spinner, {}), "Saving"]
        }) : 'Save'
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
        onClick: onCancel,
        variant: "tertiary",
        disabled: isSaving,
        children: "Cancel"
      })]
    })]
  });
}

/***/ }),

/***/ "./src/components/PagesList.js":
/*!*************************************!*\
  !*** ./src/components/PagesList.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PagesList)
/* harmony export */ });
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DeletePageButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DeletePageButton */ "./src/components/DeletePageButton.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





/**
 * PageEditButton component renders a button to edit a page.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {number} props.postID - The ID of the post to edit.
 * @example
 * return (
 *   <PageEditButton postID={1} />
 * )
 */

const PageEditButton = ({
  postID
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
  variant: "primary",
  href: `/wp-admin/post.php?post=${postID}&action=edit`,
  size: "small",
  tooltip: "Edit Page",
  showTooltip: true,
  label: "Edit Page",
  icon: "edit",
  iconSize: 12,
  className: "edit-page-button",
  children: "Edit"
});

/**
 * PagesList component renders a list of pages in a table format.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {boolean} props.hasResolved - Indicates if the pages data has been resolved.
 * @param {Array} props.pages - Array of page objects to display.
 * @example
 * const pages = [
 *   { id: 1, title: { rendered: 'Page 1' } },
 *   { id: 2, title: { rendered: 'Page 2' } }
 * ];
 * return (
 *   <PagesList hasResolved={true} pages={pages} />
 * )
 */
function PagesList({
  hasResolved,
  pages,
  currentPage = null
}) {
  if (!hasResolved) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, {});
  }
  if (!pages?.length) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: "No results"
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("table", {
    className: "wp-list-table widefat fixed striped table-view-list",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("thead", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
          className: "manage-column column-primary",
          children: "Title"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
          className: "manage-column",
          style: {
            width: 120
          },
          children: "Actions"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("tbody", {
      children: pages?.map(page => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("td", {
          children: [(0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_0__.decodeEntities)(page.title.rendered), "  "]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
          children: currentPage !== page.id ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(PageEditButton, {
              postID: page.id
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_DeletePageButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
              pageId: page.id
            })]
          }) : 'Current page'
        })]
      }, page.id))
    })]
  });
}

/***/ }),

/***/ "./src/components/editPagesIcon.js":
/*!*****************************************!*\
  !*** ./src/components/editPagesIcon.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ editPagesIcon)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


/**
 * editPagesIcon component renders an SVG icon for editing pages.
 *
 * @component
 * @example
 * return (
 *   <editPagesIcon />
 * )
 */

function editPagesIcon() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Icon, {
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      xmlns: "http://www.w3.org/2000/svg",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        fillRule: "evenodd",
        d: "M6.9 14.2c0-.4.2-.8.6-.8h6.1c.4 0 .7.4.7.8s-.3.7-.7.7H7.5c-.4 0-.6-.3-.6-.7z"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        fillRule: "evenodd",
        d: "M4.3 12.7L13.1 3.8c0 0 0 0 0-.1s0 0 0-.1L12.2 2.8c0 0 0 0-.1 0s0 0-.1 0L6.7 8.3 3.3 11.7c0 0 0 0 0 0s0 0 0 0l-.4 1.4 1.3-.4c0 0 0 0 0 0s0 0 0 0zM5.6 7.2L2.2 10.6c-.1.1-.1.2-.2.3s-.1.1-.1.2-.1.1-.1.2l-.6 2c-.1.7-.2 1-.2 1.2.1.2.3.4.5.4.2.1.5 0 1.1-.2l2.1-.6c.1 0 .2 0 .3-.1s.1 0 .1-.1c.1 0 .2-.1.3-.2l8.7-8.8c.4-.4.6-.6.7-.9.1-.2.1-.4 0-.6-.1-.2-.3-.4-.7-.8L13.3 1.8c-.4-.4-.6-.6-.9-.7-.2-.1-.4-.1-.6 0-.2.1-.4.3-.8.7L5.6 7.2z"
      })]
    }),
    className: "icon-edit-page"
  });
}

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreatePageButton: () => (/* reexport safe */ _CreatePageButton__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   CreatePageForm: () => (/* reexport safe */ _CreatePageForm__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   DeletePageButton: () => (/* reexport safe */ _DeletePageButton__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   Notifications: () => (/* reexport safe */ _Notifications__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   PageForm: () => (/* reexport safe */ _PageForm__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   PagesList: () => (/* reexport safe */ _PagesList__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   editPagesIcon: () => (/* reexport safe */ _editPagesIcon__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _PagesList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PagesList */ "./src/components/PagesList.js");
/* harmony import */ var _editPagesIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editPagesIcon */ "./src/components/editPagesIcon.js");
/* harmony import */ var _PageForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageForm */ "./src/components/PageForm.js");
/* harmony import */ var _CreatePageForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CreatePageForm */ "./src/components/CreatePageForm.js");
/* harmony import */ var _CreatePageButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CreatePageButton */ "./src/components/CreatePageButton.js");
/* harmony import */ var _Notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Notifications */ "./src/components/Notifications.js");
/* harmony import */ var _DeletePageButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DeletePageButton */ "./src/components/DeletePageButton.js");
/**
 * Import the PagesList component from the PagesList module.
 * @module Pages
 */


/**
 * Import the editPagesIcon component from the editPagesIcon module.
 * @module editPagesIcon
 */


/**
 * Import the PageForm component from the PageForm module.
 * @module PageForm
 */


/**
 * Import the CreatePageForm component from the createPageForm module.
 * @module CreatePageForm
 */


/**
 * Import the CreatePageButton component from the createPageButton module.
 * @module CreatePageButton
 */


/**
 * Import the Notifications component from the Notifications module.
 * @module Notifications
 */



/**
 * Export the imported components (PagesList, editPagesIcon, PageForm, CreatePageForm, CreatePageButton, Notifications) for use in other modules.
 * @exports PagesList
 * @exports editPagesIcon
 * @exports PageForm
 * @exports CreatePageForm
 * @exports CreatePageButton
 * @exports Notifications
 */


/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/html-entities":
/*!**************************************!*\
  !*** external ["wp","htmlEntities"] ***!
  \**************************************/
/***/ ((module) => {

module.exports = window["wp"]["htmlEntities"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/notices":
/*!*********************************!*\
  !*** external ["wp","notices"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["notices"];

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["plugins"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************************!*\
  !*** ./src/gutenberg_edit_pages.js ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_editPagesIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/editPagesIcon */ "./src/components/editPagesIcon.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components */ "./src/components/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);









const PluginSidebar = wp.editor.PluginSidebar;

/**
 * PagesSearchControl component
 *
 * This component provides a search control for pages within the Gutenberg editor.
 * It uses the `useSelect` hook to fetch pages based on the search term.
 *
 * @returns {JSX.Element} The rendered component
 */
const PagesSearchControl = () => {
  // State to keep track of the search term entered by the user
  const [searchTerm, setSearchTerm] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('');

  // Fetch pages using the `useSelect` hook based on the search term
  const {
    pages,
    hasResolved,
    currentPage
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    // Create a query object for fetching pages, use searchTerm if available
    const query = searchTerm ? {
      search: searchTerm
    } : {};
    return {
      pages: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store).getEntityRecords('postType', 'page', query),
      currentPage: wp.data.select('core/editor').getCurrentPostId(),
      hasResolved: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store).hasFinishedResolution('getEntityRecords', ['postType', 'page', query])
    };
  }, [searchTerm] // Re-run this effect when searchTerm changes
  );
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(PluginSidebar, {
    name: "gutenberg_edit_pages",
    icon: _components_editPagesIcon__WEBPACK_IMPORTED_MODULE_6__["default"],
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Edit Pages', 'hostinger-easy-onboarding'),
    className: "gutenberg-edit-pages",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Panel, {
      className: "gutenberg-edit-pages-panel",
      initialOpen: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Search Pages', 'hostinger-easy-onboarding'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SearchControl, {
          __nextHasNoMarginBottom: true,
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Search pages', 'hostinger-easy-onboarding'),
          placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Search pages', 'hostinger-easy-onboarding'),
          onChange: setSearchTerm,
          value: searchTerm,
          className: "gutenberg-edit-pages-search",
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Search for pages by title', 'hostinger-easy-onboarding')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components__WEBPACK_IMPORTED_MODULE_7__.PagesList, {
          hasResolved: hasResolved,
          pages: pages,
          currentPage: currentPage
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components__WEBPACK_IMPORTED_MODULE_7__.CreatePageButton, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components__WEBPACK_IMPORTED_MODULE_7__.Notifications, {})]
      })
    })
  });
};

/**
 * Register the plugin sidebar
 *
 * This function registers a plugin sidebar in the Gutenberg editor with the name 'gutenberg_edit_pages'.
 * The sidebar contains the PagesSearchControl component.
 */
(0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__.registerPlugin)('gutenberg-edit-pages', {
  render: PagesSearchControl
});

/**
 * Function to modify the button with aria-controls="gutenberg_edit_pages:gutenberg_edit_pages"
 *
 * This function selects the button with the specified aria-controls attribute and modifies its inner HTML
 * and class list. If the button does not exist, it logs a message to the console.
 * The function is called when the DOMContentLoaded event is fired.
 * @returns {void}
 */
const addPagesBtn = () => {
  // Select the button with the specified aria-controls attribute
  const editPagesbutton = document.querySelector('button[aria-controls="gutenberg-edit-pages:gutenberg_edit_pages"]');

  // SVG icon to display in the button
  const icon = `
        <svg width="12" height="12" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M6.9 14.2c0-.4.2-.8.6-.8h6.1c.4 0 .7.4.7.8s-.3.7-.7.7H7.5c-.4 0-.6-.3-.6-.7z"/>
            <path fill-rule="evenodd" d="M4.3 12.7L13.1 3.8c0 0 0 0 0-.1s0 0 0-.1L12.2 2.8c0 0 0 0-.1 0s0 0-.1 0L6.7 8.3 3.3 11.7c0 0 0 0 0 0s0 0 0 0l-.4 1.4 1.3-.4c0 0 0 0 0 0s0 0 0 0zM5.6 7.2L2.2 10.6c-.1.1-.1.2-.2.3s-.1.1-.1.2-.1.1-.1.2l-.6 2c-.1.7-.2 1-.2 1.2.1.2.3.4.5.4.2.1.5 0 1.1-.2l2.1-.6c.1 0 .2 0 .3-.1s.1 0 .1-.1c.1 0 .2-.1.3-.2l8.7-8.8c.4-.4.6-.6.7-.9.1-.2.1-.4 0-.6-.1-.2-.3-.4-.7-.8L13.3 1.8c-.4-.4-.6-.6-.9-.7-.2-.1-.4-.1-.6 0-.2.1-.4.3-.8.7L5.6 7.2z"/>
        </svg>
    `;

  // If the button is found, modify its content and classes
  if (editPagesbutton) {
    editPagesbutton.innerHTML = icon + ' ' + (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Edit Pages', 'hostinger-easy-onboarding');
    editPagesbutton.classList.replace('is-compact', 'is-default');
    editPagesbutton.classList.add('is-secondary');
  }
};

// Call `addPagesBtn` function with a delay of 500ms
setTimeout(addPagesBtn, 500);
// Add event listeners to execute `addPagesBtn` on DOMContentLoaded and click events
window.addEventListener('DOMContentLoaded', addPagesBtn);
window.addEventListener('click', addPagesBtn);
})();

/******/ })()
;
//# sourceMappingURL=gutenberg_edit_pages.js.map