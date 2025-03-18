
const Job = ({ job }) => {
    console.log(job)
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job
    return (
        <div>
            <img src={logo} alt="" />
            <h2>{job_title}</h2>


        </div>
    )
}

export default Job