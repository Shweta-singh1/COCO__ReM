---
layout: default
title: Download
---
<main>
    <div class="download-section">
        <h2 class="section-title">Download COCO-ReM</h2>
        <div class="download-box">
            <a href="/path/to/dataset/download" class="download-link">Download Test set</a>
        </div>
        <p class="section-description">Explore and download the latest version of the COCO-ReM dataset for your research.</p>

        <div class="dataset-overview">
            <h3 class="subsection-title">Dataset Overview:</h3>
            <ul class="overview-list">
                <li>Total Images: 5,000</li>
                <li>80 object categories</li>
                <li>Average Image Resolution: 640×480</li>
                <li>Smooth Refined Boundaries</li>
            </ul>
        </div>

        <!-- <div class="dataset-stats">
            <h3 class="subsection-title">Dataset Stats:</h3>
            <p>Total Images: 5,000+</p>
            <p>80 object categories</p>
            <p>Average Image Resolution: 640×480</p>
        </div> -->

        <div class="annotation-format">
            <h3 class="subsection-title">Annotation Format:</h3>
            <p class="annotation-description">The dataset annotations follow a standard JSON format:</p>
            <pre class="json-code">
{
    "info": {
        "version": "1.0",
        "description": "COCO-ReM Dataset",
        // Add more info as needed
    },
    "images": [
        {
            "id": 1,
            "file_name": "image1.jpg",
            // Add more image details
        },
        // Add more images
    ],
    "annotations": [
        {
            "id": 1,
            "image_id": 1,
            "category_id": 1,
            "bbox": [x, y, width, height],
            "area": area,
            "iscrowd": 0,
            // Add more annotation details
        },
        // Add more annotations
    ],
    // Add more sections if needed
}
            </pre>
        </div>
    </div>
</main>
