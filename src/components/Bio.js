import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '75%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  boxSpacing: {
    flexBasis: '33.33%',
    flexShrink: 0,
  }
}));

export default function Bio() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>About</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Willem will excel in a career that requires the combination of technical knowledge with the skill to interact with team members, relate to clients and provide customer service. His computer skills include various programming languages and operating systems. Willem also has a strong ability to acquire proficiency with new languages,technologies and administrative protocols. He proved his ability for sustained,congenial interaction with customers as a key team member that grew a start-up UBreakIFix location, to the highest-grossing outlet in the North-East in 2018. He also raised the profile of the business in the surrounding community by representing it at public events. Willem grew up with an appreciation of personal values and the virtue of serving the greater good.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Work Experience</Typography>
          <Typography className={classes.secondaryHeading}>Tata Consultancy Services</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Program Manager for Digital Initiatives:
            <br />
            Tailored full stack development training for client demand.
            <br />
            Organized full stack training for 40 associates.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Programming Skills</Typography>

        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className={classes.boxSpacing}>
            Languages:
            <br/>
            Java, Javascript, Python, HTML, CSS
          </Typography>
          <Typography className={classes.boxSpacing}>
            Databases:
            <br/>
            MongoDB, MySQL, PostgreSQL
          </Typography>
          <Typography className={classes.boxSpacing}>
            Technologies / Frameworks:
            <br/>
            React, Angular, Express, Flask, MongoDB Atlas + Stitch, Docker, Kubernetes
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

    </div>
  );
}
