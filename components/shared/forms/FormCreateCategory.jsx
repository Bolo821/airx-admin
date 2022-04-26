import React from 'react';
import { useState } from 'react';

const FormCreateCategory = () => {
    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [parent, setParent] = useState('1');
    const [description, setDescription] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleSlugChange = (e) => {
        setSlug(e.target.value);
    }
    const handleParentChange = (e) => {
        setParent(e.target.value);
    }
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }
    const handleResetClick = (e) => {
        e.preventDefault();
        setName('');
        setSlug('');
        setParent('1');
        setDescription('');
    }
    const handleAddClick = (e) => {
        e.preventDefault();
    }

    return (
        <form className="ps-form ps-form--new" action="index.html" method="get">
            <div className="ps-form__content">
                <div className="form-group">
                    <label>
                        Name<sup>*</sup>
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Enter category name"
                        onChange={handleNameChange}
                        value={name}
                    />
                </div>
                <div className="form-group">
                    <label>
                        Slug<sup>*</sup>
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Enter category slug"
                        onChange={handleSlugChange}
                        value={slug}
                    />
                </div>
                <div className="form-group form-group--select">
                    <label>Parent</label>
                    <div className="form-group__content">
                        <select className="ps-select" title="Parent" onChange={handleParentChange} value={parent}>
                            <option value="1">Parent 1</option>
                            <option value="2">Parent 2</option>
                            <option value="3">Parent 3</option>
                            <option value="4">Parent 4</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        className="form-control"
                        rows="6"
                        placeholder="Enter category description"
                        onChange={handleDescriptionChange}
                        value={description}></textarea>
                </div>
            </div>
            <div className="ps-form__bottom">
                <button className="ps-btn ps-btn--gray" onClick={handleResetClick}>Reset</button>
                <button className="ps-btn ps-btn--sumbit success" onClick={handleAddClick}>
                    Add new
                </button>
            </div>
        </form>
    );
};

export default FormCreateCategory;
