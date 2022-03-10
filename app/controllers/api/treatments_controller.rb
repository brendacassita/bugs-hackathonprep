class Api::TreatmentsController < ApplicationController
  before_action :set_bug
  before_action :set_treatment, only:[:show, :update, :destroy]
  # give me all treaments of specific bug
  # get 'api/bugs/:bug_id/treatments''
  # let res = await axios.get('/api/bugs/1/treatments')
  def index
      # find bug
      @bug = Bug.find(params[:bug_id])
      render json:  @bug.treatments
  end

  # get on treatment of specific bug
  # get 'api/bugs/:bug_id/treatments/:id''
  # let res = await axios.get('/api/bugs/2/treatments/1')
  def show
      render json: @treatment
  end

  def create
    treatment = @bug.treatments.new(treatment_params)
    if(treatment.save)
      render json: treatment
    else
      render json: {errors: treatment.errors.full_messages}, status: 422
    end
  end

 
  def update
      if(@treatment.update(treatment_params))
        render json: @treatment
      else
        render json: {errors: @treatment.errors.full_messages}, status: 422
      end
  end

  def destroy
      render json: @treatment.destroy
  end

  private 
  def set_bug
      @bug = Bug.find(params[:bug_id])
  end

  def set_treatment
      @treatment = @bug.treatments.find(params[:id])
  end

  def treatment_params
    params.require(:treatment).permit(:success_rate, :name)
  end
end