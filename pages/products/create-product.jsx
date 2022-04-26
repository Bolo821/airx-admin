import React, { useEffect, useState } from 'react';
import ContainerDefault from '~/components/layouts/ContainerDefault';
import HeaderDashboard from '~/components/shared/headers/HeaderDashboard';
import { connect, useDispatch } from 'react-redux';
import { toggleDrawerMenu } from '~/store/app/action';

const CreateProductPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(toggleDrawerMenu(false));
    }, []);

    const [name, setName] = useState('');
    const [reference, setReference] = useState('');
    const [summary, setSummary] = useState('');
    const [regularPrice, setRegularPrice] = useState('');
    const [salePrice, setSalePrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [soldItems, setSoldItems] = useState('');
    const [description, setDescription] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    const [sku, setSku] = useState('');
    const [status, setStatus] = useState('');
    const [brand, setBrand] = useState('');
    const [tags, setTags] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleReferenceChange = (e) => {
        setReference(e.target.value);
    }
    const handleSummaryChange = (e) => {
        setSummary(e.target.value);
    }
    const handleRegularPriceChange = (e) => {
        setRegularPrice(e.target.value);
    }
    const handleSalePriceChange = (e) => {
        setSalePrice(e.target.value);
    }
    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    }
    const handleSoldItemsChange = (e) => {
        setSoldItems(e.target.value);
    }
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }
    const handleVideoUrlChange = (e) => {
        setVideoUrl(e.target.value);
    }
    const handleSkuChange = (e) => {
        setSku(e.target.value);
    }
    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    }
    const handleBrandChange = (e) => {
        setBrand(e.target.value);
    }
    const handleTagsChange = (e) => {
        setTags(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <ContainerDefault title="Create new product">
            <HeaderDashboard
                title="Create Product"
                description="AirX Create New Product "
            />
            <section className="ps-new-item">
                <form
                    className="ps-form ps-form--new-product"
                    action=""
                    method="get">
                    <div className="ps-form__content">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                <figure className="ps-block--form-box">
                                    <figcaption style={{color: '#fff'}}>General</figcaption>
                                    <div className="ps-block__content">
                                        <div className="form-group">
                                            <label>
                                                Product Name<sup>*</sup>
                                            </label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Enter product name..."
                                                onChange={handleNameChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                Reference<sup>*</sup>
                                            </label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Enter product Reference..."
                                                onChange={handleReferenceChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                Product Summary<sup>*</sup>
                                            </label>
                                            <textarea
                                                className="form-control"
                                                rows="6"
                                                placeholder="Enter product description..."
                                                onChange={handleSummaryChange}></textarea>
                                                
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                Regular Price<sup>*</sup>
                                            </label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder=""
                                                onChange={handleRegularPriceChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                Sale Price<sup>*</sup>
                                            </label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                onChange={handleSalePriceChange}
                                                placeholder=""
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                Sale Quantity<sup>*</sup>
                                            </label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder=""
                                                onChange={handleQuantityChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                Sold Items<sup>*</sup>
                                            </label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder=""
                                                onChange={handleSoldItemsChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                Product Description<sup>*</sup>
                                            </label>
                                            <textarea
                                                className="form-control"
                                                rows="6"
                                                name="editordata"
                                                onChange={handleDescriptionChange}></textarea>
                                        </div>
                                    </div>
                                </figure>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                <figure className="ps-block--form-box">
                                    <figcaption style={{color: '#fff'}}>Product Images</figcaption>
                                    <div className="ps-block__content">
                                        <div className="form-group">
                                            <label>Product Thumbnail</label>
                                            <div className="form-group--nest">
                                                <input
                                                    className="form-control mb-1"
                                                    type="text"
                                                    placeholder=""
                                                />
                                                <button className="ps-btn ps-btn--sm">
                                                    Choose
                                                </button>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Product Gallery</label>
                                            <div className="form-group--nest">
                                                <input
                                                    className="form-control mb-1"
                                                    type="text"
                                                    placeholder=""
                                                />
                                                <button className="ps-btn ps-btn--sm">
                                                    Choose
                                                </button>
                                            </div>
                                        </div>
                                        <div className="form-group form-group--nest">
                                            <input
                                                className="form-control mb-1"
                                                type="text"
                                                placeholder=""
                                            />
                                            <button className="ps-btn ps-btn--sm">
                                                Choose
                                            </button>
                                        </div>
                                        <div className="form-group">
                                            <label>Video (optional)</label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Enter video URL"
                                                onChange={handleVideoUrlChange}
                                            />
                                        </div>
                                    </div>
                                </figure>
                                <figure className="ps-block--form-box">
                                    <figcaption style={{color: '#fff'}}>Inventory</figcaption>
                                    <div className="ps-block__content">
                                        <div className="form-group">
                                            <label>
                                                SKU<sup>*</sup>
                                            </label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder=""
                                                onChange={handleSkuChange}

                                            />
                                        </div>
                                        <div className="form-group form-group--select">
                                            <label>Status</label>
                                            <div className="form-group__content">
                                                <select
                                                    className="ps-select"
                                                    title="Status"
                                                    onChange={handleStatusChange}
                                                    >
                                                    <option value="1">
                                                        Status 1
                                                    </option>
                                                    <option value="2">
                                                        Status 2
                                                    </option>
                                                    <option value="3">
                                                        Status 3
                                                    </option>
                                                    <option value="4">
                                                        Status 4
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </figure>
                                <figure className="ps-block--form-box">
                                    <figcaption style={{color: '#fff'}}>Meta</figcaption>
                                    <div className="ps-block__content">
                                        <div className="form-group form-group--select">
                                            <label>Brand</label>
                                            <div className="form-group__content">
                                                <select
                                                    className="ps-select"
                                                    title="Brand"
                                                    onChange={handleBrandChange}
                                                    >
                                                    <option value="1">
                                                        Brand 1
                                                    </option>
                                                    <option value="2">
                                                        Brand 2
                                                    </option>
                                                    <option value="3">
                                                        Brand 3
                                                    </option>
                                                    <option value="4">
                                                        Brand 4
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Tags</label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                onChange={handleTagsChange}
                                            />
                                        </div>
                                    </div>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="ps-form__bottom">
                        <a
                            className="ps-btn ps-btn--black"
                            href="/products">
                            Back
                        </a>
                        <button className="ps-btn ps-btn--gray">Cancel</button>
                        <button className="ps-btn" onClick={handleSubmit}>Submit</button>
                    </div>
                </form>
            </section>
        </ContainerDefault>
    );
};
export default connect((state) => state.app)(CreateProductPage);
