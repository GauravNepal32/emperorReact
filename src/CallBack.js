import React from "react";
const CallBack = () => {
    return (
        <div class='col-md-4 d-md-block d-none col-12 d-flex justify-content-end'>
            <div className='h-100 d-flex justify-content-end'>
                <div class='callback-request-container  p-3'>
                    <h6 class='text-center'>Get Expert Admission Guidance</h6>
                    <p class='mt-3 text-center'>
                        Application fee waiver - Appl Assistance - upto 100% scholarship -
                        SOP Prep
                    </p>
                    <input
                        class='w-100 p-2 rounded'
                        type='text'
                        name='callback-phone'
                        placeholder='Mobile Number'
                    />
                    <div class=''>
                        <button class='btn btn-type-2 mt-3 text-nowrap p-2 w-100'>
                            Request callback
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallBack;
