import React from 'react'
import {Link} from '../../components'
import { registerImage } from '../../assets'

import './detailBlog.scss'
import { useHistory } from 'react-router-dom'

const DetailBlog = () => {
    const history = useHistory();
    return (
        <div className="detail-blog-wrapper">
            <Link titleLink="Kembali" onClick={() => history.push('/')} />
            <img className="img-cover" src={registerImage} alt="thumb" />
            <p className="blog-title">Title Blog</p>
            <p className="blog-author">Author - Date Post</p>
            <p className="blog-body">Reprehenderit sunt incididunt voluptate ipsum sunt eu ullamco qui ut laboris anim eiusmod. Consequat ad Lorem mollit incididunt sunt id ipsum sit mollit officia consectetur. Mollit ad minim cupidatat dolore sint. Occaecat qui tempor officia in eiusmod occaecat pariatur ut dolore. Non dolor magna in consequat consectetur aute incididunt pariatur id. Est qui reprehenderit aliqua eu. Tempor eu non occaecat labore minim enim ea cillum deserunt do cupidatat sint commodo.

Culpa Lorem eiusmod qui sint aliqua magna ea. Laboris est ipsum laboris veniam ex ad nulla duis in consectetur anim consectetur laboris cillum. Laboris excepteur consequat amet ut aliquip consequat ipsum dolor consectetur aliqua amet labore. Adipisicing qui labore ut fugiat aliqua elit fugiat consectetur. Irure eu ullamco esse qui dolore sit consequat occaecat non exercitation sit. Ut magna ut ullamco eu nulla ut laboris non.

Culpa non magna labore sit adipisicing anim id nisi. Sit aliquip aliquip ad exercitation quis et consectetur dolore esse irure Lorem cillum. Laborum ex officia sit sint consectetur. Reprehenderit et ut Lorem magna ea nostrud cupidatat non. Ex ex dolore quis fugiat cillum commodo eiusmod dolore. Ad labore ad consectetur occaecat.</p>
        </div>
    )
}

export default DetailBlog