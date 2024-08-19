import React, { memo, useState } from "react";
import { useFormik } from "formik";
import { usePathname } from "next/navigation";

import { AutoSearch } from "../component";
import { SearchEngineProps } from "../utils/types";
import { validationSchema } from "../utils/schema";
import { initialValues, searchOption } from "../utils/data";

const SearchEngine: React.FC<SearchEngineProps> = ({ handleToggle }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [sectors, setSectors] = useState([{ id: 1 }]);
    const isSearch = usePathname() === '/search';

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleAddSector = () => {
        const newSectorId = sectors.length + 1;
        setSectors([...sectors, { id: newSectorId }]);
    };

    const handleDeleteSector = (id: number) => {
        const updatedSectors = sectors.filter(sector => sector.id !== id);
        setSectors(updatedSectors);
    };

    const formik = useFormik({
        initialValues: initialValues(isSearch),
        validationSchema,
        onSubmit: async (values, { setSubmitting }) => {
            handleToggle && handleToggle();
            console.log(values);
            // router.push('/search');
        },
    });

    const { values, handleChange, errors, touched, handleSubmit, setFieldValue, isSubmitting } = formik;

    return (
        <form className="row mt-0 mt-lg-4 justify-content-center" onSubmit={handleSubmit}>
            <div className={`col-12 ${isSearch ? 'col-lg-12' : 'col-lg-11'} mb-5 text-center position-relative`}>
                <ul className={`nav nav-pills cust-pills ${isSearch ? 'd-none' : ''}`} id="pills-tab" role="tablist">
                    {['One Way', 'Round Trip', 'Multi City'].map((city, index) => (
                        <li className="nav-item" key={index}>
                            <input
                                type="radio"
                                id={`tab-${city}`}
                                name={'selectedTab'}
                                className="d-none"
                                checked={values.selectedTab === city}
                                onChange={() => setFieldValue("selectedTab", city)}
                            />
                            <label
                                htmlFor={`tab-${city}`}
                                className={`nav-link ${values.selectedTab === city ? 'active' : ''}`}
                            >
                                <span className="d-inline-block p-2 rounded-circle bg-white align-middle me-2"></span>
                                {city}
                            </label>
                        </li>
                    ))}
                </ul>

                <div className="row">
                    <div className="col-12">
                        <div className="search-pan row mx-0 theme-border-radius border">
                            <div className="col-12 col-lg-3 col-xl-2 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-2">
                                <div className="form-group">
                                    <AutoSearch
                                        setFieldValue={setFieldValue}
                                        label={'Depart From'}
                                        options={searchOption}
                                        error={errors?.departFrom}
                                        name={'departFrom'} />
                                </div>
                            </div>
                            <div className="col-12 col-lg-3 col-xl-2 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-2">
                                <div className="form-group">
                                    <AutoSearch
                                        setFieldValue={setFieldValue}
                                        label={'Arrival To'}
                                        options={searchOption}
                                        error={errors?.arrivalTo}
                                        name={'arrivalTo'} />
                                </div>
                            </div>
                            <div className={`col-12 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-0 pe-xl-2 
                            ${values.selectedTab == 'Round Trip' ? 'col-lg-6 col-xl-3' : 'col-lg-5 col-xl-2'} `}>
                                <div className="form-group">
                                    <label className="form-label">
                                        {values.selectedTab == 'Round Trip' && 'Arrival -'} Departure Date
                                    </label>
                                    <input type="date"
                                        name="arrivalDate"
                                        className="form-control"
                                        value={values?.arrivalDate}
                                        onChange={handleChange} />
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-3 ps-0 mb-2 mb-lg-0 mb-xl-0 pe-0 pe-lg-2">
                                <div className="form-group border-0">
                                    <label className="form-label">{`Traveller's`}</label>
                                    <div className="dropdown" id="myDD3">
                                        <button className="dropdown-toggle form-control" type="button" id="travellerInfoOneway21"
                                            data-bs-toggle="dropdown" aria-expanded="false" onClick={toggleDropdown}>
                                            <span className="text-truncate">
                                                {`${values?.travelers?.adults} adults - ${values?.travelers?.children} children - ${values?.travelers?.infants} infants`}
                                            </span>
                                        </button>
                                        <div className={`dropdown-menu ${dropdownVisible ? 'show' : ''}`} aria-labelledby="travellerInfoOneway21">
                                            <ul className="drop-rest">
                                                <li >
                                                    <div className="d-flex small">Adults</div>
                                                    <div className="ms-auto input-group plus-minus-input">
                                                        <div className="input-group-button">
                                                            <button type="button"
                                                                onClick={() => setFieldValue(`travelers.adults`, Math.max(0, values.travelers.adults - 1))}>
                                                                <i className="bi bi-dash"></i>
                                                            </button>
                                                        </div>
                                                        <input className="input-group-field" type="number"
                                                            name={`travelers.adults`}
                                                            value={values?.travelers.adults} readOnly
                                                        />
                                                        <div className="input-group-button">
                                                            <button type="button"
                                                                onClick={() => setFieldValue(`travelers.adults`, values.travelers.adults + 1)} >
                                                                <i className="bi bi-plus"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li >
                                                    <div className="d-flex small">Children</div>
                                                    <div className="ms-auto input-group plus-minus-input">
                                                        <div className="input-group-button">
                                                            <button type="button"
                                                                onClick={() => setFieldValue(`travelers.children`, Math.max(0, values.travelers.children - 1))} >
                                                                <i className="bi bi-dash"></i>
                                                            </button>
                                                        </div>
                                                        <input className="input-group-field" type="number"
                                                            name={`travelers.children`}
                                                            value={values?.travelers.children} readOnly
                                                        />
                                                        <div className="input-group-button">
                                                            <button type="button"
                                                                onClick={() => setFieldValue(`travelers.children`, values.travelers.children + 1)}>
                                                                <i className="bi bi-plus"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li >
                                                    <div className="d-flex small">Infants</div>
                                                    <div className="ms-auto input-group plus-minus-input">
                                                        <div className="input-group-button">
                                                            <button type="button"
                                                                onClick={() => setFieldValue(`travelers.infants`, Math.max(0, values.travelers.infants - 1))}>
                                                                <i className="bi bi-dash"></i>
                                                            </button>
                                                        </div>
                                                        <input className="input-group-field" type="number"
                                                            name={`travelers.infants`}
                                                            value={values?.travelers.infants} readOnly
                                                        />
                                                        <div className="input-group-button">
                                                            <button type="button"
                                                                onClick={() => setFieldValue(`travelers.infants`, values.travelers.infants + 1)}>
                                                                <i className="bi bi-plus"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`col-12 px-0 ${values.selectedTab == 'Multi City' ? 'col-lg-6 col-xl-3' : 'col-lg-5 col-xl-2'}`}>
                                <div className="d-flex">
                                    {values.selectedTab == 'Multi City' &&
                                        <button type="button" className="btn sector-add me-1" onClick={handleAddSector}>+ Add Sector</button>
                                    }
                                    <button type="submit" className="btn btn-search" disabled={isSubmitting}>
                                        <span className="fw-bold"><i className="bi bi-search me-2"></i>Search</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-12 col-lg-6">
                                <div className="search-pan row mx-0 theme-border-radius border">
                                    <div className="col-12 col-lg-4 col-xl-4 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-2">
                                        <div className="form-group">
                                            <label className="form-label">Name</label>
                                            <input
                                                placeholder="Name"
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                value={values?.name}
                                                onChange={handleChange}
                                            />
                                            {errors.name && touched.name && <div className="text-danger">{errors.name}</div>}
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4 col-xl-4 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-2">
                                        <div className="form-group">
                                            <label className="form-label">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email address"
                                                className="form-control"
                                                value={values?.email}
                                                onChange={handleChange}
                                            />
                                            {errors.email && touched.email && <div className="text-danger">{errors.email}</div>}
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4 col-xl-4 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-2 border-0">
                                        <div className="form-group">
                                            <label className="form-label">Phone</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Phone Number"
                                                className="form-control"
                                                value={values?.phone}
                                                onChange={handleChange}
                                            />
                                            {errors.phone && touched.phone && <div className="text-danger">{errors.phone}</div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {values.selectedTab == 'Multi City' &&
                            sectors.map((sector, index) => (
                                <div className="row mt-4" key={sector.id}>
                                    <div className="col-12 col-lg-6">
                                        <div className="search-pan row mx-0 theme-border-radius border">
                                            <div className="col-12 col-lg-4 col-xl-4 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-2">
                                                <div className="form-group">
                                                    <AutoSearch
                                                        label={'Depart From'}
                                                        options={searchOption}
                                                        setFieldValue={setFieldValue}
                                                        name={`sectors[${index}].departFrom`} />
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-4 col-xl-4 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-2">
                                                <div className="form-group">
                                                    <AutoSearch
                                                        label={'Arrival To'}
                                                        options={searchOption}
                                                        setFieldValue={setFieldValue}
                                                        name={`sectors[${index}].arrivalTo`} />
                                                </div>
                                            </div>
                                            <div className="col-11 col-lg-3 col-xl-3 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-0 pe-xl-2">
                                                <div className="form-group border-0">
                                                    <label className="form-label">Departure Date</label>
                                                    <input type="date"
                                                        name={`sectors[${index}].departureDate`}
                                                        className="form-control"
                                                        value={values?.sectors[index]?.departureDate}
                                                        onChange={handleChange} />
                                                </div>
                                            </div>
                                            <button type="button" className="btn border-0 col-1 col-lg-1 col-xl-1 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-0 pe-xl-2"
                                                onClick={() => handleDeleteSector(sector.id)} disabled={sectors.length <= 1}>
                                                <i className="bi bi-trash" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>


                <div className={`row ${isSearch ? 'd-none' : ''}`}>
                    <div className="col-12 mt-4">
                        <div className="d-flex flex-sm-row flex-column">
                            <div className="me-2 mb-2 mb-lg-0">
                                <div className="switch mode-switch">
                                    <input type="checkbox"
                                        id="stop_mode"
                                        name="stop_mode"
                                        // checked={values.stop_mode}
                                        onChange={handleChange} />
                                    <label htmlFor="stop_mode" data-on="NonStop" data-off="Stop" className="mode-switch-inner" />
                                </div>
                            </div>
                            <div className="me-2">
                                <div className="switch mode-switch">
                                    <input type="checkbox"
                                        id="class_mode"
                                        name="class_mode"
                                        // checked={values.class_mode}
                                        onChange={handleChange} />
                                    <label htmlFor="class_mode" data-on="Premium" data-off="Economy" className="mode-switch-inner" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default  memo(SearchEngine);
