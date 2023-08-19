import React from "react";
import './PetRegistration.css'
import { useNavigate } from 'react-router-dom';
function PetRegistration() {
    const navigate = useNavigate()
    const SaveHandler = () => {
        navigate('/home')
    }
    return (
        <>
            
            <section class="vh-50 pt-2">
                <div class="container pt-2 ">
                    <div class="row d-flex justify-content-center align-items-center  h-100">
                        <div class="col-xl-4">
                            <div class="card">

                                <h5 className="text-info">Hello, Parent</h5>
                            </div>
                        </div>

                        <h1 class="text-white mb-4">Apply for a job</h1>
                        {/* style={"border-radius: 15px"} */}
                        <div class="card">
                            <div class="card-body">
                                <div class="row align-items-center pt-4 pb-3">
                                    <div class="col-md-3 ps-5">
                                        <h6 class="mb-0">EnterPet name</h6>
                                    </div>
                                    <div class="col-md-9 pe-5">
                                        <input type="text" class="form-control form-control-lg" />
                                    </div>
                                </div>

                                <hr class="mx-n3" />

                                <div class="row align-items-center py-3">
                                    <div class="col-md-3 ps-5">
                                        <h6 class="mb-0">Email address</h6>
                                    </div>
                                    <div class="col-md-9 pe-5">
                                        <input
                                            type="email"
                                            class="form-control form-control-lg"
                                            placeholder="example@example.com"
                                        />
                                    </div>
                                </div>

                                <hr class="mx-n3" />

                                <div class="row align-items-center py-3">
                                    <div class="col-md-3 ps-5">
                                        <h6 class="mb-0">Full name</h6>
                                    </div>
                                    <div class="col-md-9 pe-5">
                                        <textarea
                                            class="form-control"
                                            rows="3"
                                            placeholder="Message sent to the employer"
                                        ></textarea>
                                    </div>
                                </div>
                                <hr class="mx-n3" />
                                <div class="row align-items-center py-3">
                                    <div class="col-md-3 ps-5">
                                        <h6 class="mb-0">Upload Dog Pic</h6>
                                    </div>
                                    <div class="col-md-9 pe-5">
                                        <input
                                            class="form-control form-control-lg"
                                            id="formFileLg"
                                            type="file"
                                        />
                                        <div class="small text-muted mt-2">
                                            Upload your CV/Resume or any other relevant file. Max file
                                            size 50 MB
                                        </div>
                                    </div>
                                </div>
                                <hr class="mx-n3" />
                                <div class="px-5 py-4">
                                    <button onClick={() => SaveHandler()} type="submit" class="btn btn-primary btn-lg">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default PetRegistration;