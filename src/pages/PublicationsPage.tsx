import { Link, useParams } from "react-router-dom"
import { mockPublications } from "../utils/mockPublications"

type Props = {}

const PublicationsPage = (props: Props) => {
    const { id } = useParams()
    const pub = mockPublications.find(b => b.id === id)

    if (!pub) {
        return (
            <p>The requested book does not exist.</p>
        )
    }

    return (
        <div className="col-12 col-md-3 m-3">
            <Link className="btn btn-info mb-2" to="/" >Back to Publications</Link>
            <div className="card">
                <div className="card-header">
                    id: {pub.id}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{pub.title}</h5>
                    <p className="card-text">
                        <li className="list-group-item">Pages: {pub.content}</li>
                    </p>
                </div>
            </div>
        </div>
    )

}

export default PublicationsPage