import { useForm } from "react-hook-form";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const UpdateMyToy = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { handleUpdateToy } = props;
    console.log(props);
    return (
        <Transition.Root show={props.show} as={Fragment}>
            <Dialog
                as="div"
                static
                open={props.show}
                onClose={props.onHide}
                className="fixed z-10 inset-0 overflow-y-auto"
            >
                <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <span
                        className="hidden sm:inline-block sm:align-middle sm:h-screen"
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>

                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 ">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                        <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                            Update Toy
                                        </Dialog.Title>
                                        <div className="mt-2 w-96">
                                            <form onSubmit={handleSubmit(handleUpdateToy)} >
                                                <div className="mb-3">
                                                    <label className="block text-sm font-medium text-gray-700">
                                                        Price
                                                    </label>
                                                    <input
                                                        type="number"
                                                        className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${errors.price ? "border-red-500" : ""}`}
                                                        {...register('price', { required: true })}
                                                        defaultValue={props?.toy?.price}
                                                    />
                                                    {errors.price && <span className="text-red-500">This field is required</span>}
                                                </div>

                                                <div className="mb-3">
                                                    <label className="block text-sm font-medium text-gray-700">
                                                        Available Quantity
                                                    </label>
                                                    <input
                                                        type="number"
                                                        className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${errors.availableQuantity ? "border-red-500" : ""}`}
                                                        {...register('availableQuantity', { required: true })}
                                                        defaultValue={props?.toy?.availableQuantity}
                                                    />
                                                    {errors.availableQuantity && <span className="text-red-500">This field is required</span>}
                                                </div>

                                                <div className="mb-3">
                                                    <label className="block text-sm font-medium text-gray-700">
                                                        Detail Description
                                                    </label>
                                                    <textarea
                                                        className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${errors.description ? "border-red-500" : ""}`}
                                                        {...register('description', { required: true })}
                                                        defaultValue={props?.toy?.description}
                                                    />
                                                    {errors.description && <span className="text-red-500">This field is required</span>}
                                                </div>
                                                <input
                                                    type="text"
                                                    className="hidden"
                                                    {...register('_id', { required: true })}
                                                    value={props?.toy?._id}
                                                />

                                                <button
                                                    type="submit"
                                                    className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                                                >
                                                    Update Toy
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default UpdateMyToy;
