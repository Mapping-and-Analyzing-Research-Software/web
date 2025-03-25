"use client"
import Link from "next/link";

import { useState } from 'react';


export default function Page() {

  interface TableRow {
    [key: string]: any;
  }
  const harvest_data: TableRow[] = [
    { id: 1, harvest_name: 'website.com scrape', status: "In Progress", started: "2025-03-24 13:03:02", finished: null, email: 'john@example.com', comments: "This is additional comments that someone could write. This might also include a description field, error logs, etc.", artifact_types: "GitHub Repos" },
    { id: 6, harvest_name: 'manual', status: "Done", started: "2024-03-24 13:03:02", finished: "2024-03-24 13:03:02", email: 'sam@example.com', comments: "Made for a custom thing", artifact_types: "GitHub Repos"  },
    { id: 2, harvest_name: 'website.com scrape', status: "Done", started: "2024-03-24 13:03:02", finished: "2024-03-24 13:03:02", email: 'jane@example.com', comments: "Lorium Ipsum", artifact_types: "JSON"  },
    { id: 3, harvest_name: 'spack', status: "Done", started: "2025-02-24 13:03:02", finished: "2024-03-24 13:03:02", email: 'sam@example.com', comments: "Lorium Ipsum", artifact_types: "Emails"  },
    { id: 4, harvest_name: 'big query', status: "Done - Terminated Early", started: "2025-02-14 13:03:02", finished: "2024-02-14 13:03:05", email: 'chris@example.com', comments: "Lorium Ipsum", artifact_types: "GitHub Repos"  },
    { id: 5, harvest_name: 'github keyword search', status: "Done", started: "2024-04-25 13:03:02", finished: "2024-05-24 13:03:02", email: 'anna@example.com', comments: "Lorium Ipsum", artifact_types: "GitHub Repos"  },
  ];


  const [inputValue, setInputValue] = useState<string>('');
  const [harvestName, setHarvestName] = useState<string>('GitHub API | Repo Information');
  const [description, setDescription] = useState<string>('');

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent page refresh
    // Handle form submission logic here
    const formData = {
      harvestName,
      inputValue,
      description,
    };
    console.log('Form Data:', formData);
    // You can also send this data to an API or handle it as needed
  };

   
    return (
      <>
        <div className="row w-100 justify-content-center">
        <div className="col-10 bg-white rounded p-3 m-1">
        <h3 className="h3">New Bottle: GitHub API | Repo Information</h3>
        <div className="container border rounded p-3 my-3">
        <div className="row">
        <div className="col-4">
        <h4 className="h5 border-bottom">Version</h4>
            
            <select name="harvest" id="harvest" className="form-select">
            
            <option value="">Script 3.3: 2024-11-13 (Stable)</option>
            
              <option value="">Script 3.4: 2025-01-31 (Beta)</option>
              <option value="">Script 3.2: 2024-04-04</option>
              <option value="">Script 3.1: 2024-01-31</option>
              
            </select>
            <h4 className="h5 border-bottom  mt-3">About</h4>
            <p>Written and maintained by Jane Doe, jane@domain.com.</p>
          <p>Source code for this script can be found at github.com/mars/core/.../scripts/3.3/</p>
            
          </div>
          
          <div className="col">
          <h4 className="h5 border-bottom">Description</h4>
          <p>This script allows you to bottle up information from GitHub's API about each repository in a selected harvest.</p>
          
          <p>This script can ingest harvests with these kind of artifacts: 
            
          </p>
          <ul>
              <li>GitHub Repo</li>
              <li>JSON of this format: [insert example JSON]</li>
              </ul>
          <p className="mt-3">
            Information that can be bottled from GitHub's API through this script includes:
          </p>
          <p className="text-sm">
            archivedAt, assignableUsers, codeOfConduct, contactLinks, createdAt, defaultBranchRef, deleteBranchOnMerge, description, diskUsage, forkCount, fundingLinks, hasDiscussionsEnabled, hasIssuesEnabled, hasProjectsEnabled, hasWikiEnabled, homepageUrl, id, isArchived, isBlankIssuesEnabled, isEmpty, isFork, isInOrganization, isMirror, isPrivate, isSecurityPolicyEnabled, isTemplate, isUserConfigurationRepository, issueTemplates, issues, labels, languages, latestRelease, licenseInfo, mentionableUsers, mergeCommitAllowed, milestones, mirrorUrl, name, nameWithOwner, openGraphImageUrl, owner, parent, primaryLanguage, projects, projectsV2, pullRequestTemplates, pullRequests, pushedAt, rebaseMergeAllowed, repositoryTopics, securityPolicyUrl, squashMergeAllowed, sshUrl, stargazerCount, templateRepository, updatedAt, url, usesCustomOpenGraphImage, viewerCanAdminister, viewerDefaultCommitEmail, viewerDefaultMergeMethod, viewerHasStarred, viewerPermission, viewerPossibleCommitEmails, viewerSubscription, visibility, watchers
            </p>
          </div>
          </div>
        </div>
        <div className="container border rounded p-3">
      <form onSubmit={handleSubmit}>
        <h4 className="h4 border-bottom">Bottle Information</h4>
        <div className="row">
          {/* Text field */}
          <div className="col-7">
            <label htmlFor="harvestName" className="form-label">
              Name of this bottle:
            </label>
            <input
              type="text"
              className="form-control"
              id="harvestName"
              value={harvestName}
              onChange={(e) => setHarvestName(e.target.value)} // Update the input state on change
            />
          </div>

          <div className="col">
            <label htmlFor="description" className="form-label">
              Provide a brief description or comments on this bottle:
            </label>
            <textarea
              className="form-control"
              id="description"
              rows={1}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          </div>
          <div className="row mt-3">
          {/* "Harvest" Textarea */}
          <div className="col-7">
            <label htmlFor="harvest" className="form-label">
              Select the harvest associated with this bottle
            </label>
            <select name="harvest" id="harvest" className="form-select">
            {harvest_data.map((element) => (
              <>
            
              <option value="">(ID {element.id}) {element.harvest_name}</option>
              </>
            
          ))}
            </select>
            
          </div>
            <div className="col">
            <p className="mt-3">Preview of harvest</p>
            <p className="text-sm border border-secondary text-center p-4">[Artifact pointers here]</p>
            </div>
          </div>

          <h4 className="h4 border-bottom">Script Settings</h4>

            <div className="row">
          <div className="col-8">
            <strong>
              Select which fields to save from the API
            </strong>
            <div>
            <div className="col">
        <input type="checkbox" id="archivedAt" checked />
        <label htmlFor="archivedAt">archivedAt</label>
    </div>
    <div className="col">
        <input type="checkbox" id="assignableUsers" checked />
        <label htmlFor="assignableUsers">assignableUsers</label>
    </div>
    <div className="col">
        <input type="checkbox" id="codeOfConduct" checked />
        <label htmlFor="codeOfConduct">codeOfConduct</label>
    </div>
    <div className="col">
        <input type="checkbox" id="contactLinks" checked />
        <label htmlFor="contactLinks">contactLinks</label>
    </div>
    <div className="col">
        <input type="checkbox" id="createdAt" checked />
        <label htmlFor="createdAt">createdAt</label>
    </div>
    <div className="col">
        <input type="checkbox" id="defaultBranchRef" checked />
        <label htmlFor="defaultBranchRef">defaultBranchRef</label>
    </div>
    <div className="col">
        <input type="checkbox" id="deleteBranchOnMerge" checked />
        <label htmlFor="deleteBranchOnMerge">deleteBranchOnMerge</label>
    </div>
    <div className="col">
        <input type="checkbox" id="description" checked />
        <label htmlFor="description">description</label>
    </div>
    <div className="col">
        <input type="checkbox" id="diskUsage" checked />
        <label htmlFor="diskUsage">diskUsage</label>
    </div>
    <div className="col">
        <input type="checkbox" id="forkCount" checked />
        <label htmlFor="forkCount">forkCount</label>
    </div>
    <div className="col">
        <input type="checkbox" id="fundingLinks" checked />
        <label htmlFor="fundingLinks">fundingLinks</label>
    </div>
    <div className="col">
        <input type="checkbox" id="hasDiscussionsEnabled" checked />
        <label htmlFor="hasDiscussionsEnabled">hasDiscussionsEnabled</label>
    </div>
    <div className="col">
        <input type="checkbox" id="hasIssuesEnabled" checked />
        <label htmlFor="hasIssuesEnabled">hasIssuesEnabled</label>
    </div>
    <div className="col">
        <input type="checkbox" id="hasProjectsEnabled" checked />
        <label htmlFor="hasProjectsEnabled">hasProjectsEnabled</label>
    </div>
    <div className="col">
        <input type="checkbox" id="hasWikiEnabled" checked />
        <label htmlFor="hasWikiEnabled">hasWikiEnabled</label>
    </div>
    <div className="col">
        <input type="checkbox" id="homepageUrl" checked />
        <label htmlFor="homepageUrl">homepageUrl</label>
    </div>
    <div className="col">
        <input type="checkbox" id="id" checked />
        <label htmlFor="id">id</label>
    </div>
    <div className="col">
        <input type="checkbox" id="isArchived" checked />
        <label htmlFor="isArchived">isArchived</label>
    </div>
    <div className="col">
        <input type="checkbox" id="isBlankIssuesEnabled" checked />
        <label htmlFor="isBlankIssuesEnabled">isBlankIssuesEnabled</label>
    </div>
    <div className="col">
        <input type="checkbox" id="isEmpty" checked />
        <label htmlFor="isEmpty">isEmpty</label>
    </div>
    <div className="col">
        <input type="checkbox" id="isFork" checked />
        <label htmlFor="isFork">isFork</label>
    </div>
    <div className="col">
        <input type="checkbox" id="isInOrganization" checked />
        <label htmlFor="isInOrganization">isInOrganization</label>
    </div>
    <div className="col">
        <input type="checkbox" id="isMirror" checked />
        <label htmlFor="isMirror">isMirror</label>
    </div>
    <div className="col">
        <input type="checkbox" id="isPrivate" checked />
        <label htmlFor="isPrivate">isPrivate</label>
    </div>
    <div className="col">
        <input type="checkbox" id="isSecurityPolicyEnabled" checked />
        <label htmlFor="isSecurityPolicyEnabled">isSecurityPolicyEnabled</label>
    </div>
    <div className="col">
        <input type="checkbox" id="isTemplate" checked />
        <label htmlFor="isTemplate">isTemplate</label>
    </div>
    <div className="col">
        <input type="checkbox" id="isUserConfigurationRepository" checked />
        <label htmlFor="isUserConfigurationRepository">isUserConfigurationRepository</label>
    </div>
    <div className="col">
        <input type="checkbox" id="issueTemplates" checked />
        <label htmlFor="issueTemplates">issueTemplates</label>
    </div>
    <div className="col">
        <input type="checkbox" id="issues" checked />
        <label htmlFor="issues">issues</label>
    </div>
    <div className="col">
        <input type="checkbox" id="labels" checked />
        <label htmlFor="labels">labels</label>
    </div>
    <div className="col">
        <input type="checkbox" id="languages" checked />
        <label htmlFor="languages">languages</label>
    </div>
    <div className="col">
        <input type="checkbox" id="latestRelease" checked />
        <label htmlFor="latestRelease">latestRelease</label>
    </div>
    <div className="col">
        <input type="checkbox" id="licenseInfo" checked />
        <label htmlFor="licenseInfo">licenseInfo</label>
    </div>
    <div className="col">
        <input type="checkbox" id="mentionableUsers" checked />
        <label htmlFor="mentionableUsers">mentionableUsers</label>
    </div>
    <div className="col">
        <input type="checkbox" id="mergeCommitAllowed" checked />
        <label htmlFor="mergeCommitAllowed">mergeCommitAllowed</label>
    </div>
    <div className="col">
        <input type="checkbox" id="milestones" checked />
        <label htmlFor="milestones">milestones</label>
    </div>
    <div className="col">
        <input type="checkbox" id="mirrorUrl" checked />
        <label htmlFor="mirrorUrl">mirrorUrl</label>
    </div>
    <div className="col">
        <input type="checkbox" id="name" checked />
        <label htmlFor="name">name</label>
    </div>
    <div className="col">
        <input type="checkbox" id="nameWithOwner" checked />
        <label htmlFor="nameWithOwner">nameWithOwner</label>
    </div>
    <div className="col">
        <input type="checkbox" id="openGraphImageUrl" checked />
        <label htmlFor="openGraphImageUrl">openGraphImageUrl</label>
    </div>
    <div className="col">
        <input type="checkbox" id="owner" checked />
        <label htmlFor="owner">owner</label>
    </div>
    <div className="col">
        <input type="checkbox" id="parent" checked />
        <label htmlFor="parent">parent</label>
    </div>
    <div className="col">
        <input type="checkbox" id="primaryLanguage" checked />
        <label htmlFor="primaryLanguage">primaryLanguage</label>
    </div>
    <div className="col">
        <input type="checkbox" id="projects" checked />
        <label htmlFor="projects">projects</label>
    </div>
    <div className="col">
        <input type="checkbox" id="projectsV2" checked />
        <label htmlFor="projectsV2">projectsV2</label>
    </div>
    <div className="col">
        <input type="checkbox" id="pullRequestTemplates" checked />
        <label htmlFor="pullRequestTemplates">pullRequestTemplates</label>
    </div>
    <div className="col">
        <input type="checkbox" id="pullRequests" checked />
        <label htmlFor="pullRequests">pullRequests</label>
    </div>
    <div className="col">
        <input type="checkbox" id="pushedAt" checked />
        <label htmlFor="pushedAt">pushedAt</label>
    </div>
    <div className="col">
        <input type="checkbox" id="rebaseMergeAllowed" checked />
        <label htmlFor="rebaseMergeAllowed">rebaseMergeAllowed</label>
    </div>
    <div className="col">
        <input type="checkbox" id="repositoryTopics" checked />
        <label htmlFor="repositoryTopics">repositoryTopics</label>
    </div>
    <div className="col">
        <input type="checkbox" id="securityPolicyUrl" checked />
        <label htmlFor="securityPolicyUrl">securityPolicyUrl</label>
    </div>
    <div className="col">
        <input type="checkbox" id="squashMergeAllowed" checked />
        <label htmlFor="squashMergeAllowed">squashMergeAllowed</label>
    </div>
    <div className="col">
        <input type="checkbox" id="sshUrl" checked />
        <label htmlFor="sshUrl">sshUrl</label>
    </div>
    <div className="col">
        <input type="checkbox" id="stargazerCount" checked />
        <label htmlFor="stargazerCount">stargazerCount</label>
    </div>
    <div className="col">
        <input type="checkbox" id="templateRepository" checked />
        <label htmlFor="templateRepository">templateRepository</label>
    </div>
    <div className="col">
        <input type="checkbox" id="updatedAt" checked />
        <label htmlFor="updatedAt">updatedAt</label>
    </div>
    <div className="col">
        <input type="checkbox" id="url" checked />
        <label htmlFor="url">url</label>
    </div>
    <div className="col">
        <input type="checkbox" id="usesCustomOpenGraphImage" checked />
        <label htmlFor="usesCustomOpenGraphImage">usesCustomOpenGraphImage</label>
    </div>
    <div className="col">
        <input type="checkbox" id="viewerCanAdminister" checked />
        <label htmlFor="viewerCanAdminister">viewerCanAdminister</label>
    </div>
    <div className="col">
        <input type="checkbox" id="viewerDefaultCommitEmail" checked />
        <label htmlFor="viewerDefaultCommitEmail">viewerDefaultCommitEmail</label>
    </div>
    <div className="col">
        <input type="checkbox" id="viewerDefaultMergeMethod" checked />
        <label htmlFor="viewerDefaultMergeMethod">viewerDefaultMergeMethod</label>
    </div>
    <div className="col">
        <input type="checkbox" id="viewerHasStarred" checked />
        <label htmlFor="viewerHasStarred">viewerHasStarred</label>
    </div>
    <div className="col">
        <input type="checkbox" id="viewerPermission" checked />
        <label htmlFor="viewerPermission">viewerPermission</label>
    </div>
    <div className="col">
        <input type="checkbox" id="viewerPossibleCommitEmails" checked />
        <label htmlFor="viewerPossibleCommitEmails">viewerPossibleCommitEmails</label>
    </div>
    <div className="col">
        <input type="checkbox" id="viewerSubscription" checked />
        <label htmlFor="viewerSubscription">viewerSubscription</label>
    </div>
    <div className="col">
        <input type="checkbox" id="visibility" checked />
        <label htmlFor="visibility">visibility</label>
    </div>
    <div className="col">
        <input type="checkbox" id="watchers" checked />
        <label htmlFor="watchers">watchers</label>
    </div>
            </div>
          </div>

          

          <div className="rounded p-3 w-50 m-3" style={{ border: '2px dashed #cccccc' }}>
          More settings go here.  <br /> Example: number of queries to make per minute.
          </div>

          {/* Submit Button */}
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Start Bottling
            </button>
          </div>
        </div>
      </form>
    </div>

        
        </div>
        
</div>
        
        
      </>
    );
  }

