import { useEffect, useState } from "react"
import Job from "../Job/Job"

const Featured = () => {
    const [jobs, setJobs] = useState([])
    const [dataLength, setDataLength] = useState(4)

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            <h2>Fratured Jobs</h2>
            <div className="grid grid-cols-2">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }

            </div>
            <div className=" bg-primary grid grid-cols-1 ">
                <button onClick={() => setDataLength(jobs.length)} className={dataLength === jobs.length && 'hidden'}>Show all</button>
            </div>

        </div>
    )
}

export default Featured